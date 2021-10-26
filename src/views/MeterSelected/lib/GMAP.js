import { Loader } from "@googlemaps/js-api-loader";
import MarkerClusterer from "@googlemaps/markerclustererplus"; //cluster markers
// const apiKey = "AIzaSyDcwGyRxRbcNGWOFQVT87A1mkxEOfm8t0w";
const apiKey = "AIzaSyCuwENWB9D1yZo1W0VONjWq4osmBhL4mF8";
// const apiKey = 'AIzaSyBFQ-0Ybp-dPPoD3wBJhdOm96hf9qiG4JI'
// const apiKey = "AIzaSyBD8DB4sY3_BCp0Eivuc6_MavQrw4Bb3mU";

const baseShape = {
  locateMark:
    "M512 64c-172.3 0-312 139.7-312 312 0 139.8 205.3 437 282.8 544.3 7.2 9.9 18.2 14.9 29.2 14.9s22-5 29.2-14.9C618.7 813 824 515.8 824 376c0-172.3-139.7-312-312-312z m0 424c-64.1 0-116-51.9-116-116s51.9-116 116-116 116 51.9 116 116-51.9 116-116 116z",
};
export default {
  currentInstance: null,
  markers: [],
  marker: null,
  /*******
   * @description: 地图初始化函数
   * @param { Object } options - 用于初始化的选项
   * @param { String } domId - 承载地图实例的容器id
   * @param { Function } callback - 地图加载之后的回调函数，其参数为地图实例
   * @return { Object } Map Instance 将返回一个地图实例
   */
  initMap: function(options, domId, callback = () => {}) {
    this.currentInstance = null; //init
    const loader = new Loader({
      apiKey,
      // version: "weekly"
    });
    loader.load().then(() => {
      this.currentInstance = new google.maps.Map(
        document.getElementById(domId),
        {
          ...options,
        },
      );
      this.keydragzoom();

      this.staticIcon = {
        locateMark: {
          redLM: {
            //red locate mark
            path: baseShape.locateMark,
            fillColor: "#d61c3c",
            fillOpacity: 1,
            anchor: new google.maps.Point(0, 0),
            strokeWeight: 0,
            scale: 0.035,
          },
          greyLM: {
            path: baseShape.locateMark,
            fillColor: "#a3a3a3",
            fillOpacity: 1,
            anchor: new google.maps.Point(0, 0),
            strokeWeight: 0,
            scale: 0.035,
          },
          yellowLM: {
            path: baseShape.locateMark,
            fillColor: "yellow",
            fillOpacity: 1,
            anchor: new google.maps.Point(0, 0),
            strokeWeight: 0,
            scale: 0.035,
          },
        },
      };

      // init项 应该在callback 之前执行
      callback(this.currentInstance);
    });
  },

  /*******
   * @description:添加单个marker
   * @param { Object } options
   * @param { file } options.icon - 点图标
   * @param { Object } options.position - 单点坐标 exg:{lat:xxxx ,lng:xxx}
   * @param { Object } options.map - 地图实例
   * @return {*}
   */
  addMarker(options) {
    let map = options.map; //取出实例化的地图对象
    delete options.map;
    this.marker = null; //init 初始化当前作用域临时marker容器
    this.marker = new google.maps.Marker({
      ...options,
      optimized: true, //该选项为点优化，多marker合为一个图层(没看出有什么效果)
      // animation: google.maps.Animation.DROP
    });
    this.marker.setMap(map); //将生成的marker放在传入的地图示例上
    return this.marker; //将生成的marker return
  },

  /*******
   * @description:
   * @param { Object } options
   * @param { Array<Object> } options.locations - 一系列的点坐标
   * @param { Object } options.map - 地图实例
   * @param { file } options.icon
   * @return {*}
   */
  addMarkers(options) {
    let locations = options.locations;
    delete options.locations;
    this.markers = []; //init
    locations.forEach((position, i) => {
      this.addMarker(Object.assign({ position }, options));
      this.markers.push(this.marker);
    });
    return this.markers;
  },
  /*******
   * @description:
   * @param {*} options
   * @param {*} instance
   * @return {*}
   */
  setCenterZoom(options, instance) {
    instance.setCenter(options.center);
    // instance.panTo(options.center)
    instance.setZoom(options.zoom);
  },
  clearMarkers(markers) {
    markers.forEach((it) => {
      it.setMap(null);
    });
  },

  /*******
   * @description: 获取地图点击时的鼠标点击经纬度坐标
   * @param {*} instance - 传入的地图示例
   * @param {*} callback(position)
   * @return { Object } - 返回监听器对象，可用于清除监听器
   */
  getMapClickPoint(instance, callback) {
    return instance.addListener("click", (mapsMouseEvent) => {
      callback(mapsMouseEvent.latLng);
    });
  },
  /*******
   * @description: 监听器清除
   * @param {*} eventListener - 事件监听器对象
   * @return {*} none
   */
  removeListener(eventListener) {
    google.maps.event.removeListener(eventListener);
  },
  /*******
   * @description: 弹出 popover 窗口
   * @param {Object.Object} map
   * @param {Object.String} content
   * @param {Object.Object} position
   * @return {*}
   */
  showInfo({ map = null, content = "empty content", position = null }) {
    if (this.infoWindow != null) {
      this.infoWindow.close();
    }
    if (!map || !position) {
      console.error("没有传入map实例!");
      return;
    }
    // Create the initial InfoWindow.
    this.infoWindow = new google.maps.InfoWindow({
      content: content,
      position: position,
    });
    this.infoWindow.open(map);
  },
  keydragzoom() {
    // 初始化地图shift模式框选能力
    // 引用自老项目中的shift事件库
    let vm = this;
    /*jslint browser:true */
    /*global google */
    /**
     * Converts 'thin', 'medium', and 'thick' to pixel widths
     * in an MSIE environment. Not called for other browsers
     * because getComputedStyle() returns pixel widths automatically.
     * @param {String} widthValue
     */
    var toPixels = function(widthValue) {
      var px;
      switch (widthValue) {
        case "thin":
          px = "2px";
          break;
        case "medium":
          px = "4px";
          break;
        case "thick":
          px = "6px";
          break;
        default:
          px = widthValue;
      }
      return px;
    };
    /**
     * Get the widths of the borders of an HTML element.
     *
     * @param {Object} h  HTML element
     * @return {Object} widths object (top, bottom left, right)
     */
    var getBorderWidths = function(h) {
      var computedStyle;
      var bw = {};
      if (document.defaultView && document.defaultView.getComputedStyle) {
        computedStyle = h.ownerDocument.defaultView.getComputedStyle(h, "");
        if (computedStyle) {
          // The computed styles are always in pixel units (good!)
          bw.top = parseInt(computedStyle.borderTopWidth, 10) || 0;
          bw.bottom = parseInt(computedStyle.borderBottomWidth, 10) || 0;
          bw.left = parseInt(computedStyle.borderLeftWidth, 10) || 0;
          bw.right = parseInt(computedStyle.borderRightWidth, 10) || 0;
          return bw;
        }
      } else if (document.documentElement.currentStyle) {
        // MSIE
        if (h.currentStyle) {
          // The current styles may not be in pixel units so try to convert (bad!)
          bw.top = parseInt(toPixels(h.currentStyle.borderTopWidth), 10) || 0;
          bw.bottom =
            parseInt(toPixels(h.currentStyle.borderBottomWidth), 10) || 0;
          bw.left = parseInt(toPixels(h.currentStyle.borderLeftWidth), 10) || 0;
          bw.right =
            parseInt(toPixels(h.currentStyle.borderRightWidth), 10) || 0;
          return bw;
        }
      }
      // Shouldn't get this far for any modern browser
      bw.top = parseInt(h.style["border-top-width"], 10) || 0;
      bw.bottom = parseInt(h.style["border-bottom-width"], 10) || 0;
      bw.left = parseInt(h.style["border-left-width"], 10) || 0;
      bw.right = parseInt(h.style["border-right-width"], 10) || 0;
      return bw;
    };

    /**
     * Get the position of the mouse relative to the document.
     * @param {Object} e  Mouse event
     * @return {Object} left & top position
     */
    var getMousePosition = function(e) {
      var posX = 0,
        posY = 0;
      e = e || window.event;
      if (typeof e.pageX !== "undefined") {
        posX = e.pageX;
        posY = e.pageY;
      } else if (typeof e.clientX !== "undefined") {
        posX =
          e.clientX +
          (typeof document.documentElement.scrollLeft !== "undefined"
            ? document.documentElement.scrollLeft
            : document.body.scrollLeft);
        posY =
          e.clientY +
          (typeof document.documentElement.scrollTop !== "undefined"
            ? document.documentElement.scrollTop
            : document.body.scrollTop);
      }
      return {
        left: posX,
        top: posY,
      };
    };

    /**
     * Get the position of an HTML element relative to the document.
     * @param {Object} h  HTML element
     * @return {Object} left & top position
     */
    var getElementPosition = function(h) {
      var posX = h.offsetLeft;
      var posY = h.offsetTop;
      var parent = h.offsetParent;
      // Add offsets for all ancestors in the hierarchy
      while (parent !== null) {
        // Adjust for scrolling elements which may affect the map position.
        //
        // See http://www.howtocreate.co.uk/tutorials/javascript/browserspecific
        //
        // "...make sure that every element [on a Web page] with an overflow
        // of anything other than visible also has a position style set to
        // something other than the default static..."
        if (parent !== document.body && parent !== document.documentElement) {
          posX -= parent.scrollLeft;
          posY -= parent.scrollTop;
        }
        posX += parent.offsetLeft;
        posY += parent.offsetTop;
        parent = parent.offsetParent;
      }
      return {
        left: posX,
        top: posY,
      };
    };
    /**
     * Set the properties of an object to those from another object.
     * @param {Object} obj target object
     * @param {Object} vals source object
     */
    var setVals = function(obj, vals) {
      if (obj && vals) {
        for (var x in vals) {
          if (vals.hasOwnProperty(x)) {
            obj[x] = vals[x];
          }
        }
      }
      return obj;
    };
    /**
     * Set the opacity. If op is not passed in, this function just performs an MSIE fix.
     * @param {Node} div
     * @param {Number} op (0-1)
     */
    var setOpacity = function(div, op) {
      if (typeof op !== "undefined") {
        div.style.opacity = op;
      }
      if (typeof div.style.opacity !== "undefined") {
        div.style.filter = "alpha(opacity=" + div.style.opacity * 100 + ")";
      }
    };

    /**
     * @name KeyDragZoomOptions
     * @class This class represents the optional parameter passed into <code>google.maps.Map.enableDragBoxZoom</code>.
     * @property {String} [key] the hot key to hold down to activate a drag zoom, <code>shift | ctrl | alt</code>.
     * The default is <code>shift</code>.
     * @property {Object} [boxStyle] the css style of the zoom box.
     * The default is <code>{border: 'thin solid #FF0000'}</code>.
     * Border widths must be specified in pixel units (or as thin, medium, or thick).
     * @property {Object} [paneStyle] the css style of the pane which overlays the map when a drag zoom is activated.
     * The default is <code>{backgroundColor: 'white', opacity: 0.0, cursor: 'crosshair'}</code>.
     */
    /**
     * @name DragZoom
     * @class This class represents a drag zoom object for a map. The object is activated by holding down the hot key.
     * This object is created when <code>google.maps.Map.enableKeyDragZoom</code> is called; it cannot be created directly.
     * Use <code>google.maps.Map.getDragZoomObject</code> to gain access to this object in order to attach event listeners.
     * @param {google.maps.Map} map
     * @param {KeyDragZoomOptions} opt_zoomOpts
     */
    var prj = null;

    function DragZoom(map, opt_zoomOpts) {
      var ov = new google.maps.OverlayView();

      var me = this;
      ov.onAdd = function() {
        me.init_(map, opt_zoomOpts);
      };
      ov.draw = function() {};
      ov.onRemove = function() {};
      ov.setMap(map);
      this.prjov_ = ov;
      google.maps.event.addListener(map, "idle", function() {
        prj = ov.getProjection();
      });
    }

    /**
     * Init the tool.
     * @param {google.maps.Map} map
     * @param {KeyDragZoomOptions} opt_zoomOpts
     */
    DragZoom.prototype.init_ = function(map, opt_zoomOpts) {
      this.map_ = map;
      opt_zoomOpts = opt_zoomOpts || {};
      this.key_ = opt_zoomOpts.key || "shift";
      this.key_ = this.key_.toLowerCase();
      this.borderWidths_ = getBorderWidths(this.map_.getDiv()); //Container());
      this.paneDiv_ = document.createElement("div");
      this.paneDiv_.onselectstart = function() {
        return false;
      };
      // default style
      setVals(this.paneDiv_.style, {
        backgroundColor: "white",
        opacity: 0.0,
        cursor: "crosshair",
      });
      // allow overwrite
      setVals(this.paneDiv_.style, opt_zoomOpts.paneStyle);
      // stuff that cannot be overwritten
      setVals(this.paneDiv_.style, {
        position: "absolute",
        overflow: "hidden",
        zIndex: 10001,
        display: "none",
      });
      if (this.key_ === "shift") {
        // Workaround for Firefox Shift-Click problem
        this.paneDiv_.style.MozUserSelect = "none";
      }
      setOpacity(this.paneDiv_);
      // An IE fix: if the background is transparent, it cannot capture mousedown events
      if (this.paneDiv_.style.backgroundColor === "transparent") {
        this.paneDiv_.style.backgroundColor = "white";
        setOpacity(this.paneDiv_, 0);
      }
      this.map_.getDiv().appendChild(this.paneDiv_); //Container()
      this.boxDiv_ = document.createElement("div");
      setVals(this.boxDiv_.style, {
        border: "1px solid #2b85e4",
        background: "rgba(92,173,255,0.1)",
      });
      setVals(this.boxDiv_.style, opt_zoomOpts.boxStyle);
      setVals(this.boxDiv_.style, {
        position: "absolute",
        display: "none",
      });
      setOpacity(this.boxDiv_);
      this.map_.getDiv().appendChild(this.boxDiv_);
      this.boxBorderWidths_ = getBorderWidths(this.boxDiv_);
      var me = this;
      this.keyDownListener_ = google.maps.event.addDomListener(
        document,
        "keydown",
        function(e) {
          me.onKeyDown_(e);
        },
      );
      this.keyUpListener_ = google.maps.event.addDomListener(
        document,
        "keyup",
        function(e) {
          me.onKeyUp_(e);
        },
      );
      this.mouseDownListener_ = google.maps.event.addDomListener(
        this.paneDiv_,
        "mousedown",
        function(e) {
          me.onMouseDown_(e);
        },
      );
      this.mouseDownListenerDocument_ = google.maps.event.addDomListener(
        document,
        "mousedown",
        function(e) {
          me.onMouseDownDocument_(e);
        },
      );
      this.mouseMoveListener_ = google.maps.event.addDomListener(
        document,
        "mousemove",
        function(e) {
          me.onMouseMove_(e);
        },
      );
      this.mouseUpListener_ = google.maps.event.addDomListener(
        document,
        "mouseup",
        function(e) {
          me.onMouseUp_(e);
        },
      );

      this.hotKeyDown_ = false;
      this.dragging_ = false;
      this.startPt_ = null;
      this.endPt_ = null;
      this.boxMaxX_ = null;
      this.boxMaxY_ = null;
      this.mousePosn_ = null;
      this.mapPosn_ = getElementPosition(this.map_.getDiv());
      this.mouseDown_ = false;
    };

    /**
     * Returns true if the hot key is being pressed when an event occurs.
     * @param {Event} e
     * @return {Boolean}
     */
    DragZoom.prototype.isHotKeyDown_ = function(e) {
      var isHot;
      e = e || window.event;
      isHot =
        (e.shiftKey && this.key_ === "shift") ||
        (e.altKey && this.key_ === "alt") ||
        (e.ctrlKey && this.key_ === "ctrl");
      if (!isHot) {
        // Need to look at keyCode for Opera because it
        // doesn't set the shiftKey, altKey, ctrlKey properties
        // unless a non-modifier event is being reported.
        //
        // See http://cross-browser.com/x/examples/shift_mode.php
        // Also see http://unixpapa.com/js/key.html
        switch (e.keyCode) {
          case 16:
            if (this.key_ === "shift") {
              isHot = true;
            }
            break;
          case 17:
            if (this.key_ === "ctrl") {
              isHot = true;
            }
            break;
          case 18:
            if (this.key_ === "alt") {
              isHot = true;
            }
            break;
        }
      }
      return isHot;
    };

    /**
     * Checks if the mouse is on top of the map. The position is captured
     * in onMouseMove_.
     * @return true if mouse is on top of the map div.
     */
    DragZoom.prototype.isMouseOnMap_ = function() {
      var mousePos = this.mousePosn_;
      if (mousePos) {
        var mapPos = this.mapPosn_;
        var mapDiv = this.map_.getDiv();
        return (
          mousePos.left > mapPos.left &&
          mousePos.left < mapPos.left + mapDiv.offsetWidth &&
          mousePos.top > mapPos.top &&
          mousePos.top < mapPos.top + mapDiv.offsetHeight
        );
      } else {
        // if user never moved mouse
        return false;
      }
    };

    /**
     * Show or hide the overlay pane, depending on whether the mouse is over the map.
     */
    DragZoom.prototype.setPaneVisibility_ = function() {
      if (this.map_ && this.hotKeyDown_ && this.isMouseOnMap_()) {
        var mapDiv = this.map_.getDiv();
        this.paneDiv_.style.left = 0 + "px";
        this.paneDiv_.style.top = 0 + "px";
        this.paneDiv_.style.width =
          mapDiv.offsetWidth -
          (this.borderWidths_.left + this.borderWidths_.right) +
          "px";
        this.paneDiv_.style.height =
          mapDiv.offsetHeight -
          (this.borderWidths_.top + this.borderWidths_.bottom) +
          "px";
        this.paneDiv_.style.display = "block";
        this.boxMaxX_ =
          parseInt(this.paneDiv_.style.width, 10) -
          (this.boxBorderWidths_.left + this.boxBorderWidths_.right);
        this.boxMaxY_ =
          parseInt(this.paneDiv_.style.height, 10) -
          (this.boxBorderWidths_.top + this.boxBorderWidths_.bottom);
      } else {
        this.paneDiv_.style.display = "none";
      }
    };
    /**
     * Handle key down. Activate the tool only if the mouse is on top of the map.
     * @param {Event} e
     */
    DragZoom.prototype.onKeyDown_ = function(e) {
      var me = this;
      if (this.map_ && !this.hotKeyDown_ && this.isHotKeyDown_(e)) {
        me.hotKeyDown_ = true;
        me.setPaneVisibility_();
        /**
         * This event is fired when the hot key is pressed.
         * @name DragZoom#activate
         * @event
         */
        google.maps.event.trigger(me, "activate");
      }
    };
    /**
     * Get the <code>google.maps.Point</code> of the mouse position.
     * @param {Object} e
     * @return {google.maps.Point} point
     * @private
     */
    DragZoom.prototype.getMousePoint_ = function(e) {
      var mousePosn = getMousePosition(e);
      var p = new google.maps.Point();
      p.x = mousePosn.left - this.mapPosn_.left - this.borderWidths_.left;
      p.y = mousePosn.top - this.mapPosn_.top - this.borderWidths_.top;
      p.x = Math.min(p.x, this.boxMaxX_);
      p.y = Math.min(p.y, this.boxMaxY_);
      p.x = Math.max(p.x, 0);
      p.y = Math.max(p.y, 0);
      return p;
    };
    /**
     * Handle mouse down.
     * @param {Event} e
     */
    DragZoom.prototype.onMouseDown_ = function(e) {
      if (this.map_ && this.hotKeyDown_) {
        this.mapPosn_ = getElementPosition(this.map_.getDiv());
        this.dragging_ = true;
        this.startPt_ = this.endPt_ = this.getMousePoint_(e);
        var prj = this.prjov_.getProjection();
        var latlng = prj.fromDivPixelToLatLng(this.startPt_);
        /**
         * This event is fired when the drag operation begins.
         * @name DragZoom#dragstart
         * @param {GLatLng} startLatLng
         * @event
         */
        google.maps.event.trigger(this, "dragstart", latlng);
      }
    };
    /**
     * Handle mouse down at the document level.
     * @param {Event} e
     */
    DragZoom.prototype.onMouseDownDocument_ = function(e) {
      this.mouseDown_ = true;
    };
    /**
     * Handle mouse move.
     * @param {Event} e
     */
    DragZoom.prototype.onMouseMove_ = function(e) {
      this.mousePosn_ = getMousePosition(e);
      if (this.dragging_) {
        this.endPt_ = this.getMousePoint_(e);
        var left = Math.min(this.startPt_.x, this.endPt_.x);
        var top = Math.min(this.startPt_.y, this.endPt_.y);
        var width = Math.abs(this.startPt_.x - this.endPt_.x);
        var height = Math.abs(this.startPt_.y - this.endPt_.y);
        this.boxDiv_.style.left = left + "px";
        this.boxDiv_.style.top = top + "px";
        this.boxDiv_.style.width = width + "px";
        this.boxDiv_.style.height = height + "px";
        this.boxDiv_.style.display = "block";
        /**
         * This event is repeatedly fired while the user drags the box. The southwest and northeast
         * point are passed as parameters of type <code>google.maps.Point</code> (for performance reasons),
         * relative to the map container. Note: the event listener is responsible
         * for converting Pixel to LatLng, if necessary.
         * @name DragZoom#drag
         * @param {google.maps.Point} southwestPixel
         * @param {google.maps.Point} northeastPixel
         * @event
         */
        google.maps.event.trigger(
          this,
          "drag",
          new google.maps.Point(left, top + height),
          new google.maps.Point(left + width, top),
        );
      } else if (!this.mouseDown_) {
        this.setPaneVisibility_();
      }
    };
    /**
     * Handle mouse up.
     * @param {Event} e
     */

    DragZoom.prototype.onMouseUp_ = function(e) {
      this.mouseDown_ = false;

      if (this.dragging_) {
        // MyBnd = null;
        var left = Math.min(this.startPt_.x, this.endPt_.x);
        var top = Math.min(this.startPt_.y, this.endPt_.y);
        var width = Math.abs(this.startPt_.x - this.endPt_.x);
        var height = Math.abs(this.startPt_.y - this.endPt_.y);
        var points = {
          top: top,
          left: left,
          bottom: top + height,
          right: left + width,
        };
        var prj = this.prjov_.getProjection();
        var xyu = "oooppp";
        // 2009-05-29: since V3 does not have fromContainerPixel,
        //needs find offset here
        var containerPos = getElementPosition(this.map_.getDiv());
        var mapPanePos = getElementPosition(this.prjov_.getPanes().mapPane);
        left = left + (containerPos.left - mapPanePos.left);
        top = top + (containerPos.top - mapPanePos.top);
        var sw = prj.fromDivPixelToLatLng(
          new google.maps.Point(left, top + height),
        );
        var ne = prj.fromDivPixelToLatLng(
          new google.maps.Point(left + width, top),
        );
        var bnds = new google.maps.LatLngBounds(sw, ne);
        //this.map_.fitBounds(bnds);
        this.dragging_ = false;
        this.boxDiv_.style.display = "none";
        /**
         * This event is fired when the drag operation ends.
         * Note that the event is not fired if the hot key is released before the drag operation ends.
         * @name DragZoom#dragend
         * @param {GLatLngBounds} newBounds
         * @event
         */

        vm.SelectMarkers(bnds);
        google.maps.event.trigger(this, "dragend", points);

        //document.getElementById('xlol').innerText = cvcv;
      }
    };

    /**
     * Handle key up.
     * @param {Event} e
     */
    DragZoom.prototype.onKeyUp_ = function(e) {
      if (this.map_ && this.hotKeyDown_) {
        this.hotKeyDown_ = false;
        this.dragging_ = false;
        this.boxDiv_.style.display = "none";
        this.paneDiv_.style.display = "none";
        /**
         * This event is fired while the user release the key
         * @name DragZoom#deactivate
         * @event
         */
        google.maps.event.trigger(this, "deactivate");
      }
    };
    /**
     * @name google.maps.Map
     * @class These are new methods added to the Google Maps API's
     * <a href  = 'http://code.google.com/apis/maps/documentation/v3/reference.html#Map'>Map</a>
     * class.
     */
    /**
     * Enable drag zoom. The user can zoom to an area of interest by holding down the hot key
     * <code>(shift | ctrl | alt )</code> while dragging a box around the area.
     * @param {KeyDragZoomOptions} opt_zoomOpts
     */

    google.maps.Map.prototype.enableKeyDragZoom = function(opt_zoomOpts) {
      this.dragZoom_ = new DragZoom(this, opt_zoomOpts);
    };
    /**
     * Disable drag zoom.
     */
    google.maps.Map.prototype.disableKeyDragZoom = function() {
      var d = this.dragZoom_;
      if (d) {
        google.maps.event.removeListener(d.mouseDownListener_);
        google.maps.event.removeListener(d.mouseDownListenerDocument_);
        google.maps.event.removeListener(d.mouseMoveListener_);
        google.maps.event.removeListener(d.mouseUpListener_);
        google.maps.event.removeListener(d.keyUpListener_);
        google.maps.event.removeListener(d.keyDownListener_);
        this.getDiv().removeChild(d.boxDiv_);
        this.getDiv().removeChild(d.paneDiv_);
        this.dragZoom_ = null;
      }
    };
    /**
     * Returns true if the drag zoom feature has been enabled.
     * @return {Boolean}
     */
    google.maps.Map.prototype.keyDragZoomEnabled = function() {
      return this.dragZoom_ !== null;
    };
    /**
     * Returns the DragZoom object which is created when <code>google.maps.Map.enableKeyDragZoom</code> is called.
     * With this object you can use <code>google.maps.event.addListener</code> to attach event listeners
     * for the 'activate', 'deactivate', 'dragstart', 'drag', and 'dragend' events.
     * @return {DragZoom}
     */
    google.maps.Map.prototype.getDragZoomObject = function() {
      return this.dragZoom_;
    };
  },
  SelectMarkers(Bounds) {
    this.Bounds = null; //init
    this.Bounds = Bounds;
    if (this.markerListener) {
      // （触发订阅者模式的注册事件）
      this.markerListener(Bounds);
    }
  },

  /*******
   * @description: 当按住shift 框选后，鼠标松开触发的事件，该事件接收一个回调函数作为参数
   * 而后，该回调函数将会被触发，并传回一个Bounds 对象，这是一个google map 的边界对象，它能够通过Bounds.cantains({lnglat坐标})的形式去
   * 判断某点是否包含在Bounds所在的边界内。
   * @param {*} callback
   * @return {*}
   */
  onAreaMarkersSelect(callback) {
    // 将回调注册到当前全局对象 （订阅者模式中的注册事件）
    this.markerListener = callback;
  },
  /**
   * 该方法的调用：
   * GMAP.onAreaMarkersSelect((e) => {
   *  console.log(e, "--line56");
   * });
   *
   */

  // 工具函数
  utils: {
    /*******
     * @description: 数组去重，包含元素为Object 的数组
     * @param {*} arr
     * @return {*}
     */

    distinct(arr) {
      // 对象元素的数组去重
      // for...of + Object 去重
      let obj = {};
      let result = [];
      for (let i of arr) {
        let _i = JSON.stringify(i);
        if (!obj[_i]) {
          obj[_i] = true;
          result.push(JSON.parse(_i));
        }
      }
      return result;
    },
    /*******
     * @description: 找出两个数组非交集的部分 [1,2,3,4] !∩ [3,4,5,6] ==> [1,2,5,6]
     * @param { Array } a
     * @param { Array } b
     * @return { Array } [a !∩ b]
     */
    diff(a, b) {
      let aStr = JSON.stringify(a);
      let bStr = JSON.stringify(b);
      let result = [];
      for (let i of a) {
        if (!bStr.includes(JSON.stringify(i))) {
          result.push(i);
        }
      }
      for (let i of b) {
        if (!aStr.includes(JSON.stringify(i))) {
          result.push(i);
        }
      }
      return result;
    },
  },
  staticIcon: null, //init in the loader hook !!!
};

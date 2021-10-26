function mocker() {
  let mock = [];
  for (let i = 0; i < 200; i++) {
    mock.push({
      meterId: (202010102010000069 * Math.random()).toString(),
      meterNumber: (19190111732 * Math.random()).toString(),
      longitude: 26.206499 * Math.random(),
      latitude: -29.15328 * Math.random(),
    });
  }
  return mock;
}
export default {
  code: 0,
  meterList: mocker(),
  // meterList: [
  //   {
  //     meterId: "202010102010000069",
  //     meterNumber: "19190111732",
  //     longitude: 26.206499,
  //     latitude: -29.15328,
  //   },
  //   {
  //     meterId: "202010102010000070",
  //     meterNumber: "19190108209",
  //     longitude: 26.206013,
  //     latitude: -29.153168,
  //   },
  //   {
  //     meterId: "202010102010000071",
  //     meterNumber: "19190105684",
  //     longitude: 26.206157,
  //     latitude: -29.15319,
  //   },
  //   {
  //     meterId: "202010102010000072",
  //     meterNumber: "19190108225",
  //     longitude: 26.206385,
  //     latitude: -29.153252,
  //   },
  //   {
  //     meterId: "202010102010000073",
  //     meterNumber: "19190111757",
  //     longitude: 26.20626,
  //     latitude: -29.153209,
  //   },
  //   {
  //     meterId: "202010102010000074",
  //     meterNumber: "19190105726",
  //     longitude: 26.206421,
  //     latitude: -29.153055,
  //   },
  //   {
  //     meterId: "202010102010000075",
  //     meterNumber: "19190111740",
  //     longitude: 26.206479,
  //     latitude: -29.152919,
  //   },
  //   {
  //     meterId: "202010102010000076",
  //     meterNumber: "19190108191",
  //     longitude: 26.206309,
  //     latitude: -29.153048,
  //   },
  //   {
  //     meterId: "202010102010000077",
  //     meterNumber: "19190108233",
  //     longitude: 26.206347,
  //     latitude: -29.1529,
  //   },
  //   {
  //     meterId: "202010102010000078",
  //     meterNumber: "19190105700",
  //     longitude: 26.206204,
  //     latitude: -29.153028,
  //   },
  //   {
  //     meterId: "202010102010000079",
  //     meterNumber: "19190105676",
  //     longitude: 26.206048,
  //     latitude: -29.152998,
  //   },
  //   {
  //     meterId: "202010102010000080",
  //     meterNumber: "19190108241",
  //     longitude: 26.206229,
  //     latitude: -29.152882,
  //   },
  //   {
  //     meterId: "202010102010000081",
  //     meterNumber: "19190105692",
  //     longitude: 26.206095,
  //     latitude: -29.152848,
  //   },
  //   {
  //     meterId: "202010102010000082",
  //     meterNumber: "19190108217",
  //     longitude: 26.206595,
  //     latitude: -29.152909,
  //   },
  // ],
};

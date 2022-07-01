Blockly.defineBlocksWithJsonArray([
{
  "type": "ZX-Ir Temp_read",
  "message0": "AMG8833 address %1 read %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "addr",
      "options": [
        [
          "0x44",
          "0x44"
        ],
        [
          "0x45",
          "0x45"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "temperature (°C)",
          "0"
        ],
      ]
    }
  ],
  "output": "Number",
  "colour": "#8b507c",
  "tooltip": "",
  "helpUrl": ""
}
]);

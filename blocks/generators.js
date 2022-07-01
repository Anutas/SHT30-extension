Blockly.Python['ZX-Ir Temp_read'] = function (block) {
  Blockly.Python.definitions_['import_AMG8833'] = 'import AMG8833';

  var dropdown_addr = block.getFieldValue('addr');
  var dropdown_type = block.getFieldValue('type');

  var code = `ZX-Ir Temp.read(${dropdown_addr})[${dropdown_type}]`;
  return [code, Blockly.Python.ORDER_NONE];
};

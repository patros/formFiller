var $validationErrors = jQuery('div.validation-summary-errors li');
if ($validationErrors.length < 1) {
  alert('No validation errors found.');
} else {
  var fieldNameRequiredRegex = /^The (.+) field is required/;
  var fieldNameInvalidValueRegex = /^(.+) contains an invalid value/;
  $validationErrors.each(function() {
    var validationMessage = jQuery(this).text().trim();
    var matches = validationMessage.match(fieldNameRequiredRegex);
    if (!matches) matches = validationMessage.match(fieldNameInvalidValueRegex);
    if (matches) {
      var $fieldLabel = jQuery('label.field-title:contains("' + matches[1] + '"), span.field-title:contains("' + matches[1] + '")');
      if ($fieldLabel.length == 1) {
        var color = 'blue';
        if (validationMessage.match(fieldNameRequiredRegex)) color = 'red';
        jQuery(this).css('color', color);
        $fieldLabel.css('color', color);
      }
    }
  });
}

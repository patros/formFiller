var $form = jQuery('div.form-wffm form');
if ($form.length != 1) {
  alert('Could not find form correctly, ' + $form.length + ' matches for selector: ' + selector);
} else {
  var $textInputs = $form.find('input[type=text]');
  var $emailInputs = $form.find('input[type=email]');
  var $telInputs = $form.find('input[type=tel]');
  var $textAreas = $form.find('textarea');
  var $selects = $form.find('select');
  var $checkboxes = $form.find('input[type=checkbox]');
  var $radios = $form.find('input[type=radio]');
  var $fileInputs = $form.find('input[type=file]');

  $textInputs.each(function(index, element) {
    var label = jQuery(element).parents('div.field-border').find('span.field-title').text().trim();
    if (label.indexOf('email') > -1) {
      jQuery(element).val('email' + index + '@example.com');
    } else {
      jQuery(element).val('Text Input #' + index + '(' + label + ')');
    }
  });

  $emailInputs.each(function(index, element) {
    jQuery(element).val('email' + index + '@example.com');
  });

  $telInputs.each(function(index, element) {
    var telephoneNumber = index.toString();
    while (telephoneNumber.length < 10) telephoneNumber = '0' + telephoneNumber;
    jQuery(element).val(telephoneNumber);
  });

  $textAreas.each(function(index) {
    var label = jQuery(element).parents('div.field-border').find('span.field-title').text().trim();
    jQuery(this).val('Text Area #' + index + '(' + label + ')');
  });

  $selects.each(function(index) {
    jQuery(this).val(jQuery(jQuery(this).find('option')[1]).attr('value'));
  });

  $checkboxes.each(function(index) {
    jQuery(this).prop('checked', true);
  });

  $radios.each(function(index) {
    jQuery(this).prop('checked', true);
  });

  if ($fileInputs.length) alert('There are ' + $fileInputs.length + ' file inputs which require manual entry.');
}

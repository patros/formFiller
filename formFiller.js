var $form = jQuery('div.form-wffm form');
if ($form.length != 1) {
  alert('Could not find form correctly');
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
    $(element).val('Text Input #' + index);
  });

  $emailInputs.each(function(index, element) {
    $(element).val('email' + index + '@example.com');
  });

  $telInputs.each(function(index, element) {
    var telephoneNumber = index.toString();
    while (telephoneNumber.length < 10) telephoneNumber = '0' + telephoneNumber;
    $(element).val(telephoneNumber);
  });

  $textAreas.each(function(index) {
    $(this).val('Text Area #' + index);
  });

  $selects.each(function(index) {
    $(this).val($($(this).find('option')[1]).attr('value'));
  });

  $checkboxes.each(function(index) {
    $(this).prop('checked', true);
  });

  $radios.each(function(index) {
    $(this).prop('checked', true);
  });

  if ($fileInputs.length) alert('There are ' + $fileInputs.length + ' file inputs which require manual entry.');
}

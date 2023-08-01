$(document).ready(function() {
    // Update icons when the form values change
    $('#form input').on('input', function() {
      var networkValue = $('#network').val();
      var batteryValue = $('#battery').val();
      
      // Update the text and background color of the network icon
      $('.network-value').text(networkValue + "%");
      $('.network-icon').css('background-color', 'rgba(0, 0, 255, ' + networkValue / 100 + ')');
      
      // Update the text and background color of the battery icon
      $('.battery-value').text(batteryValue + "%");
      $('.battery-icon').css('background-color', 'rgba(0, 255, 0, ' + batteryValue / 100 + ')');
    });
  });
  
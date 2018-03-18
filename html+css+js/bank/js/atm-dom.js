/*globals $*/
$(document).ready(function() {
  
  // get and initialise balance displays
  const $chqBalance = $('#checking-balance');
  const $savBalance = $('#savings-balance');
  const $chqAmount = $('#checking-amount');
  const $savAmount = $('#savings-amount');

  // update balance displays
  const updateBalanceDisplay = () => {
    $chqBalance.text(`$${bank.chq.balance}`);
    $chqBalance.text() === '$0'
      ? $chqBalance.addClass('zero')
      : $chqBalance.removeClass('zero');

    $savBalance.text(`$${bank.sav.balance}`);
    $savBalance.text() === '$0'
      ? $savBalance.addClass('zero')
      : $savBalance.removeClass('zero');
  };

  updateBalanceDisplay();

  // click handeler
  const clickHandeler = function() {
    switch ($(this).attr('id')) {
    case 'checking-deposit':
      bank.deposit('chq', $chqAmount.val());
      $chqAmount.val('');
      updateBalanceDisplay();
      break;
    case 'checking-withdraw':
      bank.withdraw('chq', $chqAmount.val());
      $chqAmount.val('');
      updateBalanceDisplay();
      break;
    case 'savings-deposit':
      bank.deposit('sav', $savAmount.val());
      $savAmount.val('');
      updateBalanceDisplay();
      break;
    case 'savings-withdraw':
      bank.withdraw('sav', $savAmount.val());
      $savAmount.val('');
      updateBalanceDisplay();
      break;
    default:
      break;
    }
  };

  // add eventlisteners to buttons
  $('#checking-withdraw').on('click', clickHandeler);
  $('#checking-deposit').on('click', clickHandeler);
  $('#savings-withdraw').on('click', clickHandeler);
  $('#savings-deposit').on('click', clickHandeler);
});

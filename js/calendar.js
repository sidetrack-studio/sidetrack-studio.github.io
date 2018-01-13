$(function() {
  addCalRow('2018-01-26', 'OKDOEI', 'The Great Goodbye')
  addCalRow('2018-02-07', 'JDD-BD', false, 'http://nu.nl', 'http://vice.com')
  addCalRow('2018-02-22', 'St*ff')
  addCalRow('2018-03-04', 'Studio Sessions - BRAND')
  addCalRow('2018-03-15', 'VRIJ(mibo)')
  addCalRow('2018-03-21', 'Studio Sessions - Cheff')
  addCalRow('2018-03-22', 'St*ff')
});

function addCalRow(dateStr, name, desc, infoUrl, tixUrl){
  var row = $('<tr class="calendar-item">');
  var date = moment(dateStr)

  var colDate = $('<td class="calendar-item-date">');
  colDate.append($('<h5 class="text-center">').html(date.format("ddd")));
  colDate.append($('<h1 class="text-center">').html(date.format("DD")));
  colDate.append($('<h5 class="text-center">').html(date.format("MMM")));

  var colName = $('<td class="calendar-item-title">');
  colName.append($('<h1>').html(name));
  if(desc)
    colName.append($('<h3>').html(desc));

  var colBtns = $('<td class="calendar-item-btns text-center">');
  if(tixUrl)
    colBtns.append($('<a role="button" class="btn btn-sm btn-primary btn-block" target="_blank">').html("Tickets").attr('href',tixUrl));
  if(infoUrl)
    colBtns.append($('<a role="button" class="btn btn-sm btn-secondary btn-block" target="_blank">').html("Info").attr('href',infoUrl));

  row.append(colDate);
  row.append(colName);
  row.append(colBtns);

  $('#calendar-table>tbody').append(row);
}

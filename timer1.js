const alarms = process.argv.slice(2);

for (const alarm of alarms) {
  let parsedAlarm = parseInt(alarm);
  if (typeof parsedAlarm === 'number' && parsedAlarm > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, (parsedAlarm * 1000));
  }
}
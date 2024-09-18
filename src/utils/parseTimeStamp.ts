function parseTimeStamp(timeStamp) {
  return new Date(timeStamp).toLocaleTimeString('ko', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default parseTimeStamp;

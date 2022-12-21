export const timeCalculator = (writtenAtTime) => {
  const start = new Date(writtenAtTime); // 글작성시간
  const end = new Date(); // 현재시간

  const diffMin = (end.getTime() - start.getTime());

  if (diffMin < 60000) {
    return '방금전';
  } else if (diffMin < 3600000) {
    const min = Math.floor(diffMin / (1000 * 60));
    return `${min}분 전`;
  } else if (diffMin < 86400000) {
    const hour = Math.floor(diffMin / (1000 * 60 * 60));
    return `${hour}시간 전`;
  } else {
    const date = start.toISOString().split('T')[0];
    return `${date}`;
  }
};

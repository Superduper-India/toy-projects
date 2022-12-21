import AWS from 'aws-sdk';

export const timeCalculator = (writtenAtTime) => {
  const start = new Date(writtenAtTime); // 글작성시간
  const end = new Date(); // 현재시간

  // ToDo 자바스크립트 경과시간 계산하기 라이브러리 사용하기 
  // 로직을 millisecond로 바꾸기???
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

const guid = () => {
  function _s4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return _s4() + _s4();
};

// 파일을 받는 함수
export const uploadFile = async (file) => {
  if (!file) return;

  // s3 config
  const region = 'ap-northeast-2';
  const bucket = 'img-s3-bucket/fashion';
  AWS.config.update({
    region: region,
    accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
  });

  // s3 upload 함수, ( Key는 업로드될 img의 이름 )
  const upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: bucket,
      Key: `${guid()}.jpeg`,
      Body: file,
    },
  });

  try {
    const promise = await upload.promise();
    return promise.Location;
  } catch (err) {
    alert('err');
  }
};

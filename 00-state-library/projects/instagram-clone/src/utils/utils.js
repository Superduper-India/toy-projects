import AWS from 'aws-sdk';

export const timeCalculator = (writtenAtTime) => {
  const writtenTime = new Date(writtenAtTime);
  const now = new Date();

  const diffMin = (now - writtenTime);

  if (diffMin < 6000000) {
    return '방금전';
  } else if (diffMin < 360000000) {
    const min = Math.floor(diffMin / (1000 * 60) % 60);
    return `${min}분 전`;
  } else if (diffMin < 86400000000) {
    const hour = Math.floor(diffMin / (1000 * 60 * 60) % 24);
    return `${hour}시간 전`;
  }
  // toDo 일단위 계산표시 구현하기
  const date = Math.floor(diffMin / (1000 * 60 * 60 * 24));
  return `${date}`;
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

export const configs =
  process.env.NODE_ENV === 'production'
    ? {
        host: 'https://q79hrrw8lc.execute-api.ap-northeast-2.amazonaws.com/production/',
      }
    : {
        host: 'http://localhost:8080/',
      };

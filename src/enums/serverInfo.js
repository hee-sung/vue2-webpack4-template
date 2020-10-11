const SERVER_TYPES = Object.freeze({
  LOCAL: 'local',
  DEV: 'dev',
  STAGE: 'stage',
  REAL: 'real'
});

// TODO : 서버 정보 나오면 변경 처리
const SERVICE_API_SERVER = Object.freeze({
  LOCAL: '',
  DEV: 'https://devapi.chocolleto.com',
  STAGE: 'https://stgapi.chocolleto.com',
  REAL: 'https://api.chocolleto.com'
});

const ADMIN_API_SERVER = Object.freeze({
  LOCAL: '',
  DEV: 'https://devapi.chocolleto-admin.com',
  STAGE: 'https://stgapi.chocolleto-admin.com',
  REAL: 'https://api.chocolleto-admin.com'
});

const SUB_DOMAIN_FOR_WEB = Object.freeze({
  LOCAL: '',
  DEV: 'dev',
  STAGE: 'stg',
  REAL: 'real'
});

const LOCAL_IP_LIST = Object.freeze([
  'localhost',
  '0.0.0.0'
]);

export {
  SERVER_TYPES,
  SERVICE_API_SERVER,
  ADMIN_API_SERVER,
  SUB_DOMAIN_FOR_WEB,
  LOCAL_IP_LIST
}
const constants = {
  BASE_URL: 'https://xpay-server.herokuapp.com/',
  STUDENT_URL: 'https://ilyalite.website.yandexcloud.net/xpay/student/',
  LOCAL_STOTAGE_ID: 'xpay_loginID',
  API_METHODS: {
    STUDENT: 'student',
    HIDE_STUDENT: 'student/hide',
    STUDENTS: 'students',
    DEAL: 'deal',
    HISTORY: 'history',
  },
  MODAL_STATES: {
    ADD_CASH: 'ADD_CASH',
    SUBTRACT_CASH: 'SUBTRACT_CASH',
    HISTORY: 'HISTORY',
    ADD_STUDENT: 'ADD_STUDENT',
    RENAME_STUDENT: 'RENAME_STUDENT',
    AUTH: 'AUTH',
    COPIED: 'COPIED',
    HIDE: 'HIDE',
  },
};

export default constants;

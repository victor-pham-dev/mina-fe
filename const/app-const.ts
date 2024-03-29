import { SelectProps } from 'antd'

export const textWhite = '#fff'

export enum ROLE {
  ADMIN = 0,
  STAFF = 1,
  USER = 2
}

export const PATH = {
  ABOUT_US: 've-mina',
  COURSE: 'khoa-hoc',
  OPENING_SCHEDULE: 'lich-khai-giang',
  CLASS_REGISTRATION: 'dang-ky-hoc',
  CLASS: 'lop-hoc',
  TAKE_THE_TEST: 'lam-bai-test',
  LOGIN: 'dang-nhap',
  REGISTER: 'dang-ky',
  FORGOT_PASSWORD: 'quen-mat-khau',
  PROFILE: 'thong-tin-ca-nhan',
  MANAGE: 'quan-tri',
  STUDENT: 'hoc-vien',
  USER: 'user',
  ADMIN: 'admin',
  NEWS_AND_EVENTS: 'tin-tuc-&-su-kien',
  STUDIES_SPACE: 'goc-hoc-tap'
}

export const STORAGE_KEY = {
  LOCAL_USER: 'beep',
  THEME: 'theme',
  SECTIONTHEME: 'sectionTheme'
}

export const API = `${process.env.be_url}/api`

export enum METHOD {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  PATCH = 'patch',
  DELETE = 'delete'
}

export const RESPONSE_CODE = {
  FAILED: 400,
  AUTH_FAILED: 401,
  CREATED: 201,
  OK: 200,
  NOT_FOUND: 404,
  INTERNAL: 500,
  EXIST: 409
}

export const STORAGE = {
  LOCAL: 'local',
  SESSION: 'session'
}

export const ACCEPT_FILE = ['image/jpeg', 'image/jpg', 'image/png']

export const menuitemsList = [
  {
    path: PATH.ABOUT_US,
    label: 'Về mina'
  },
  {
    path: PATH.STUDIES_SPACE,
    label: 'Góc học tập'
  },
  {
    path: PATH.COURSE,
    label: 'Khoá học'
  },
  {
    path: PATH.CLASS,
    label: 'Lớp học'
  },
  {
    path: PATH.TAKE_THE_TEST,
    label: 'Làm bài Test'
  }
]

export enum CLASS_STATUS {
  OPEN = 0, //for recruit student
  PROCESSING = 1, //class is started
  END = 2 // class ended
}
export enum CLASS_LEVEL {
  N1 = 'N1',
  N2 = 'N2',
  N3 = 'N3',
  N4 = 'N4',
  N5 = 'N5',
  N5B = 'N5B'
}

export const classLevelOption = [
  {
    label: CLASS_LEVEL.N1,
    value: CLASS_LEVEL.N1
  },
  {
    label: CLASS_LEVEL.N2,
    value: CLASS_LEVEL.N2
  },
  {
    label: CLASS_LEVEL.N3,
    value: CLASS_LEVEL.N3
  },
  {
    label: CLASS_LEVEL.N4,
    value: CLASS_LEVEL.N4
  },
  {
    label: CLASS_LEVEL.N5,
    value: CLASS_LEVEL.N5
  }
]

export const dayOfWeekOption: SelectProps['options'] = [
  {
    label: 'Thứ Hai',
    value: 'Thứ Hai'
  },
  {
    label: 'Thứ Ba',
    value: 'Thứ Ba'
  },
  {
    label: 'Thứ Tư',
    value: 'Thứ Tư'
  },
  {
    label: 'Thứ Năm',
    value: 'Thứ Năm'
  },
  {
    label: 'Thứ Sáu',
    value: 'Thứ Sáu'
  },
  {
    label: 'Thứ Bảy',
    value: 'Thứ Bảy'
  },
  {
    label: 'Chủ Nhật',
    value: 'Chủ Nhật'
  }
]

export enum REGIS_STATUS {
  INIT = 0,
  CHECKED = 1,
  CONFIRMED = 2,
  CANCELED = 3
}

export enum STUDENT_STATUS {
  WAITING = 0,
  STUDYING = 1,
  DONE = 2,
  CANCELED = 3
}

export enum POST_TYPE {
  STUDY = 'study',
  NEWS = 'news'
}
export enum POST_STATUS {
  APPROVAL = 0,
  APPROVED = 1
}

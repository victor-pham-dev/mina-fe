import { CLASS_LEVEL, CLASS_STATUS } from '@/const/app-const'

export interface ClassProps {
  _id?: string
  classLevel:
    | CLASS_LEVEL.N1
    | CLASS_LEVEL.N2
    | CLASS_LEVEL.N3
    | CLASS_LEVEL.N4
    | CLASS_LEVEL.N5
  numberOfStudents: number
  cardImg: string
  schedule: any
  time: any
  description: string
  creatorId: string
  teacher?: string
  deleted: Boolean
  recruiting: Boolean
  status: CLASS_STATUS.OPEN | CLASS_STATUS.PROCESSING | CLASS_STATUS.END
}

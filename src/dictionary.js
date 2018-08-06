export default {
  en: {
    messages: {
      required(field) {
        return `${field} must be enterd`
      }, min(field) {
        return `${field} at least..`
      }
    },
    attributes: {
      name: 'name',
      lastName: 'lastName'
    }
  },
  th: {
    messages: {
      required(field) {
        return `ต้องป้อน ${field} นะครับ`
      }, min(field) {
        return `${field} ความยาว..`
      }
    },
    attributes: {
      name: 'ชื่อ',
      lastName: 'นามสกุล'
    }
  }
}
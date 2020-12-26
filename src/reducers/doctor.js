const initialState = {
    loading: true,
    doctor: {}
}

export const doctor = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DOCTOR_REQUESTED': 
            return Object.assign({}, state, {
                loading: true
            })
        case 'GET_DOCTOR_SUCCESS':
            return Object.assign({}, state, {
                loading: false,
                doctor: action.data.doctor
            })
        case 'GET_DOCTOR_FAILED':
            return Object.assign({}, state, {
                loading: false,
                doctor: {}
            })
        default: 
            return state
    }
}
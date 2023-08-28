const BUY_PHONE = 'BUY_PHONE'
const BUY_TABLET = 'BUY_TABLET'
const BUY_TV = 'BUY_TV'
//Fonctions de création d'action
function buyPhone() {
    return {
        type: BUY_PHONE
    }
}

function buyTablet() {
    return {
        type: BUY_TABLET
    }
}

function buyTv(){
    return {
        type: BUY_TV
    }
}

/* Reducer */
const initialStatePhone = {
    phones: 5,
    tablets: 9
}

const initialStateTv = {
    tv: 20,
    
}

const phonesReducer = (state=initialStatePhone, action) => {

    switch (action.type){
        case BUY_PHONE:
            return {
                ...state,
                phones: state.phones - 1
            }

        case BUY_TABLET:
            return {
                ...state,
                tablets: state.tablets - 1
            }

        default: return state
    }
}


const  tvReducer = (state=initialStateTv, action) =>{
    switch(action.type){
        case BUY_TV:
            return {
                ...state,
                tv: state.tv - 1
            }
        default: return state
    }
}

//Combine reducers
const rootReducer = Redux.combineReducers({
    phone: phonesReducer,
    tv: tvReducer
})

//Créer le store
const store = Redux.createStore(rootReducer)
console.log(store)

//Récupérer la data du store
const availablePhones = document.getElementById('count')
availablePhones.innerHTML = store.getState().phone.phones

const availableTablets = document.getElementById('count-tab')
availableTablets.innerHTML = store.getState().phone.tablets

const availableTv = document.getElementById('count-tv')
availableTv.innerHTML = store.getState().tv.tv
console.log(store.getState())

//Effectuer le dispatch d'une action
document.getElementById('buy-phone').addEventListener('click', function(){
    store.dispatch(buyPhone())
})

document.getElementById('buy-tablet').addEventListener('click', function(){
    store.dispatch(buyTablet())
})

document.getElementById('buy-tv').addEventListener('click', function(){
    store.dispatch(buyTv())
})


//Listener
store.subscribe(()=> {
    availablePhones.innerHTML = store.getState().phone.phones
    availableTablets.innerHTML = store.getState().phone.tablets
    availableTv.innerHTML = store.getState().tv.tv
    
    console.log('Mon nouveau store', store.getState())
})

import { Activity } from "../types"

/*Type local*/
export type ActivityActions = 
    {type: 'save-activity', payload: { newActivity: Activity } } |
    {type: 'set-activeId', payload: { id: Activity['id'] } } |
    {type: 'delete-activity', payload: { id: Activity['id'] } } |
    {type: 'restart-app'} 


/*Type local, el state de este reducer se llama activities y sera un Type Activity*/
export type ActivityState = {
    activities: Activity[],
    activeId: Activity['id']
}

const localStorageActivities = () : Activity[] => {
    const activities = localStorage.getItem('activities')
    return activities ? JSON.parse(activities) : []
}

/*Estado inicial*/
export const initialState : ActivityState = {
    activities: localStorageActivities(),
    activeId: ''
}
/*Reducer*/
export const activityReducer = (
        state: ActivityState = initialState,
        action: ActivityActions
    ) => {
        /*Este if se tienen en casi todas las acciones del reducer */
        if(action.type === 'save-activity'){
            /*Por cada action se tienen un solo return */
            let updatedActivities : Activity[] = []
            if(state.activeId){
                updatedActivities = state.activities.map(activity => activity.id === state.activeId ? action.payload.newActivity : activity)
            }else{
                updatedActivities = [...state.activities, action.payload.newActivity]
            }
            return{
                /*Usualmente se tienen una copia */
                ...state,
                activities: updatedActivities,
                activeId: ''
            }
        }

        if(action.type === 'set-activeId'){
            return{
                ...state,
                activeId: action.payload.id
            }
        }

        if(action.type === 'delete-activity'){
            return{
                ...state,
                activities: state.activities.filter(activity => activity.id !== action.payload.id)
            }
        }

        if(action.type === 'restart-app'){
            return{
                activities: [],
                activeId: ''
            }
        }
    return state
}
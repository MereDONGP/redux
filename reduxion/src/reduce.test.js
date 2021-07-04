import Reducer from './reducer'
import deepFreeze from 'deep-freeze'

describe('testing the app', () => {
    const initial = {
        good: 0,
        bad: 0,
        ok: 0,
    }
    test('do nothing for the application', () => {
        const state = {
        }
        const action = {
          type: 'DO_NOTHING'
        }
        const newState = Reducer(undefined, action)
        expect(newState).toEqual(initial)
    })

    test('increase the good by one and leave the rest at zero', () => {
        const good = {
            type: 'good',
        }
        const state = initial
        deepFreeze(state)
        const goodchange = Reducer(state, good)
        expect(goodchange).toEqual({
            good:1,
            bad:0,
            ok:0,
        })
    })

    test('bad the good by one and leave the rest at zero', () => {
        const bad = {
            type: 'bad',
        }
        const state = initial
        deepFreeze(state)
        const goodchange = Reducer(state, bad)
        expect(goodchange).toEqual({
            good:0,
            bad:1,
            ok:0,
        })
    })

    test('increase the ok by one and leave the rest at zero', () => {
        const ok = {
            type: 'ok',
        }
        const state = initial
        deepFreeze(state)
        const goodchange = Reducer(state,ok)
        expect(goodchange).toEqual({
            good:0,
            bad:0,
            ok:1,
        })
    })

    test('testing that everything goes back to zero by the end', () => {
        const zero = {
            type: 'zero'
        }

        const status = {
            good: 1,
            bad: 1,
            ok: 1
        }
        deepFreeze(status)
        const zerochange = Reducer(status,zero)
        expect(zerochange).toEqual(initial)
    })

})


const JsonResponseService = require('../Services/JsonResponseService')

describe('JsonResponse', () => {

    test('JsonResponse failure', () => {
            expect(JsonResponseService()).toEqual({
                'data': [],
                'success': false,
                'message': 'Error',
                'status': 500
            })
        })

    test('JsonResponse success', () => {
        const data =
            [{
                "id": 1,
                "name": "duck",
                "origin": "ducksville",
                "diet": "duck",
                "age": 89,
                "real": 0,
                "strength": 10,
                "intelligence": 10,
                "image": null
            }]

        expect(JsonResponseService(data, true, 'Success', 200)).toEqual({
            'data':
                [{
                    "id": 1,
                    "name": "duck",
                    "origin": "ducksville",
                    "diet": "duck",
                    "age": 89,
                    "real": 0,
                    "strength": 10,
                    "intelligence": 10,
                    "image": null
                }],
            'success': true,
            'message': 'Success',
            'status': 200
        })
    })
})
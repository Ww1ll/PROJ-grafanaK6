import http from 'k6/http'
import { sleep } from 'k6'
import { check, fail } from 'k6'

export default function () {
    let res = http.get('http://localhost:3000/#/Usuários/get_usuarios')
    let failMsg = 'Falha na excução do cenário getAllUsers'

    if(!check(res, {  
            'status is 200': (r) => r.status === 200
        
    })){
        fail(failMsg)
    }

    sleep(1)

}




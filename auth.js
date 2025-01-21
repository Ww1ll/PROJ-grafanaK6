//import enconding from 'k6/encondig'
import http from 'k6/http'
import { check, fail } from 'k6'
//import dotenv from 'dotenv'


export default function (){

    let failToken = 'Falha na autenticação'
    let loginRes = http.post('http://localhost:3000/login/', JSON.stringify({
        email: 'fulano@qa.com',
        password: 'teste',
    }), {
        headers: {'Content-Type': 'application/json'},
    }
)

    if(!check(loginRes, {  
            'status is 200': (r) => r.status === 200,
            'token recebido': (r) => JSON.parse(r.body).authorization,
        
    })){
        fail(failToken)
    }


    let data = JSON.parse(loginRes.body)
    let token = data.authorization

    console.log(`Token recebido ${token}`)
    return token

}

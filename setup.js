import enconding from 'k6/encondig'
import http from 'k6/http'
import { check, fail } from 'k6'
import dotenv from 'dotenv'


export default function (token){

    let failToken = 'Falha na autenticação'
    let loginRes = http.post('http://localhost:3000/#/Login/post_login', JSON.stringify({
        email: __ENV.EMAIL,
        password: __ENV.PASSWORD
    }), {
        headers: {'Content-Type': 'application/json'},
    }
)

    if(!check(loginRes, {  
            'status is 200': (r) => r.status === 200,
            'token recebido': (r) => JSON.parse(r.body).authorization
        
    })){
        fail(failToken)
    }


    let data = JSON.parse(loginRes.body)
    let token = data.authorization

    console.log(`Token recebido ${token}`)
    return token


    // https://grafana.com/docs/k6/latest/examples/http-authentication/
    //https://medium.com/@mohsenny/setting-up-a-robust-performance-and-load-testing-framework-with-k6-bfbaadd39b41
    // autenticar api e realizar o método post
    // fazer tudo dinamicamente e evitar situaçãoes mockadas
    // aplicar dotenv pra não subir credencial
}

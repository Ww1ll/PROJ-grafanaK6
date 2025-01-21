import http from 'k6/http'
import { sleep } from 'k6'
import { check, fail } from 'k6'
import auth from '../auth';
import { faker } from '@faker-js/faker';


export default function () {
        let url = 'http://localhost:3000/#/Produtos/post_produtos'
        let failMsg = 'Falha na excução do cenário cadastrar produto'
        let payload = JSON.stringify({
            nome: faker.commerce.productName(),
            preco: faker.commerce.price(),
            descricao: faker.commerce.productDescription(),
            quantidade: faker.number.float()
        })

        const token = auth()

      let params = {
        headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json',
        }
      }

      let res = http.post(url, params, payload)

        if(!check(res, {  
                'status is 201': (r) => r.status === 201
            
        })){
            fail(failMsg)
        }
    
        sleep(1)
    

}
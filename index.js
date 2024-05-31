import getAllUsers from "./scenarios/getAllUsers.js";
import getAllProducts from "./scenarios/getAllProducts.js";
import { group, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";


export let options = {
    stages: [
        { duration: '30s', target: 20 },
        { duration: '1m', target: 20 },
        { duration: '10s', target: 0 }
    ]
}

export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
  }

export default () => {
    group('Listar todos os usuários', ()=> {
        getAllUsers()

    })

    group('Listar todos os produtos', ()=> {
        getAllProducts()

    })

    sleep(1)
}
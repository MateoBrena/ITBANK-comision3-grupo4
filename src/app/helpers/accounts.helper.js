import accounts from "../db/accounts.json"

const accountsRepo = {
    getAll : () => accounts,
}

export default accountsRepo
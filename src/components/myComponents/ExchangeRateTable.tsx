import { useState } from "react";
import DataTable from "./DataTable";
import ExchangeHeader from "./ExchangeHeader";

const ExchangeRateTable = () => {
    const [baseCode, setBaseCode] = useState<string>('')
    return (
        <div className="container mx-auto p-4 lg:p-0 max-w-7xl">
            <ExchangeHeader baseCode={baseCode} setBaseCode={setBaseCode} />
            <DataTable baseCode={baseCode} />
        </div>
    )
}

export default ExchangeRateTable
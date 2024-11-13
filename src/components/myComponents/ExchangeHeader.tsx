import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { fetchCurrencyCodes } from "@/services/fetchCodeTypes";
import { Badge } from "../ui/badge";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "../ui/select";
import { CardDescription, CardTitle, CardHeader, CardContent, Card } from "../ui/card";
import { CurrencyExchangeData } from "@/types";
import { fetchCurrencyExchangeData } from "@/services/fetchCurrencyExchangeData";

interface dataProps extends CurrencyExchangeData {
    success?: string
}


const ExchangeHeader = ({ data }: dataProps) => {
    const dispatch = useAppDispatch();
    const [baseCode, setBaseCode] = useState<string>('')


    useEffect(() => {
        dispatch(fetchCurrencyCodes());
        if (baseCode) {
            dispatch(fetchCurrencyExchangeData(baseCode))
        }
    }, [dispatch, baseCode])


    const { isLoading, codeTypesData } = useAppSelector(state => state.cdData)


    const handleBaseCodeChange = (code: string) => {
        setBaseCode(code);
        //console.log(code)
    }
    return (
        <Card className="mb-6 shadow-lg border-t-4 border-t-primary">
            <CardHeader className="space-y-4">
                <CardTitle className="text-3xl font-bold text-primary">
                    Currency Exchange Rates
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-lg">
                    Base Currency:
                    <Badge className="px-3 py-1 text-md font-semibold">
                        {data?.base_code}
                    </Badge>
                    <Select onValueChange={handleBaseCodeChange}>
                        <SelectTrigger className="w-[280px]">
                            <SelectValue placeholder={'Base Code'} />
                        </SelectTrigger>
                        <SelectContent>
                            {codeTypesData?.supported_codes.map(([code, name], index) => (
                                <SelectItem key={index} value={code}>
                                    {code} - {name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-muted/50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-muted-foreground mb-2">
                            Last Updated
                        </p>
                        <p className="text-md font-semibold">
                            {data?.time_last_update_utc}
                        </p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-muted-foreground mb-2">
                            Next Update
                        </p>
                        <p className="text-md font-semibold">
                            {data?.time_next_update_utc}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ExchangeHeader;


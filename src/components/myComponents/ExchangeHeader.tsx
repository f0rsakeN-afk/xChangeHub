import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { fetchCurrencyCodes } from "@/services/fetchCodeTypes";
import { Badge } from "../ui/badge";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "../ui/select";
import { CardDescription, CardTitle, CardHeader, CardContent, Card } from "../ui/card";
import { fetchCurrencyExchangeData } from "@/services/fetchCurrencyExchangeData";
import { Skeleton } from "../ui/skeleton";


interface ExchangeHeaderProps {
    baseCode: string;
    setBaseCode: (code: string) => void
}

const ExchangeHeader = ({ baseCode, setBaseCode }: ExchangeHeaderProps) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCurrencyExchangeData())
        dispatch(fetchCurrencyCodes());
        if (baseCode) {
            dispatch(fetchCurrencyExchangeData(baseCode))
        }
    }, [dispatch, baseCode])

    const { isTypesLoading, codeTypesData } = useAppSelector(state => state.cdData)
    const { isLoading, standardConversionData } = useAppSelector(state => state.stData)

    const handleBaseCodeChange = (code: string) => {
        setBaseCode(code);
    }

    return (
        <Card className="mb-6 shadow-lg border-t-4 border-t-primary">
            <CardHeader className="space-y-4">
                <CardTitle className="text-3xl font-bold text-primary">
                    Currency Exchange Rates
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-lg">
                    {isTypesLoading ? (
                        <>
                            <Skeleton className="h-6 w-[120px]" />
                            <Skeleton className="h-6 w-[180px]" />
                        </>
                    ) : (
                        <>
                                Base Currency:
                                <Badge className="px-3 py-1 text-md font-semibold">
                                    {standardConversionData?.base_code}
                                </Badge>
                                <Select onValueChange={handleBaseCodeChange} value={baseCode}>
                                    <SelectTrigger className="w-[280px]">
                                        <SelectValue placeholder={'Base Code'} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {codeTypesData?.supported_codes?.map(([code, name]: [string, string], index: number) => (
                                            <SelectItem key={index} value={code}>
                                            {code}
                                            <span className="hidden sm:inline md:inline lg:inline xl:inline 2xl:inline">
                                                - {name}
                                            </span>
                                        </SelectItem>

                                    ))}
                                    </SelectContent>
                                </Select>
                        </>
                    )}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {isLoading ? (
                        <>
                            <div className="bg-muted/50 p-4 rounded-lg">
                                <Skeleton className="h-4 w-24 mb-2" />
                                <Skeleton className="h-6 w-48" />
                            </div>
                            <div className="bg-muted/50 p-4 rounded-lg">
                                <Skeleton className="h-4 w-24 mb-2" />
                                <Skeleton className="h-6 w-48" />
                            </div>
                        </>
                    ) : (
                        <>
                                <div className="bg-muted/50 p-4 rounded-lg">
                                    <p className="text-sm font-medium text-muted-foreground mb-2">
                                        Last Updated
                                    </p>
                                    <p className="text-md font-semibold">
                                        {standardConversionData?.time_last_update_utc}
                                    </p>
                                </div>
                                <div className="bg-muted/50 p-4 rounded-lg">
                                    <p className="text-sm font-medium text-muted-foreground mb-2">
                                        Next Update
                                    </p>
                                    <p className="text-md font-semibold">
                                        {standardConversionData?.time_next_update_utc}
                                    </p>
                                </div>
                        </>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}

export default ExchangeHeader;
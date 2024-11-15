import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks"
import { Card, CardContent } from "../ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"
import { useEffect } from "react"
import { fetchCurrencyExchangeData } from "@/services/fetchCurrencyExchangeData"
import CompareCurrencyComp from "./CompareCurrency"
import { Skeleton } from "../ui/skeleton"

interface DataTableProps {
    baseCode?: string
}

const DataTable = ({ baseCode }: DataTableProps) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchCurrencyExchangeData(baseCode))
    }, [dispatch, baseCode])

    const { isLoading, standardConversionData } = useAppSelector(state => state.stData)

    // Show loading state with skeleton loader
    if (isLoading) {
        return (
            <Card className="shadow-lg p-2">
                <CardContent className="grid md:grid-cols-2 gap-2">
                    <div>
                        <Skeleton className="h-8 mb-4" />
                        <Skeleton className="h-8 mb-4" />
                        <Skeleton className="h-[300px] w-full" />
                    </div>
                    <div>
                        <Skeleton className="h-12" />
                    </div>
                </CardContent>
            </Card>
        )
    }

    // If no data is available
    if (!standardConversionData?.conversion_rates) {
        return (
            <Card className="shadow-lg p-2">
                <CardContent className="grid md:grid-cols-2 gap-2">
                    <div>No data available</div>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="shadow-lg p-2">
            <CardContent className="grid md:grid-cols-2 gap-2">
                <div>
                    <Table className="min-w-full text-sm">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="text-left px-4 py-2">Currency Code</TableHead>
                                <TableHead className="text-left px-4 py-2">Current Rate</TableHead>
                            </TableRow>
                        </TableHeader>
                    </Table>
                    <ScrollArea className="max-h-[480px] overflow-y-auto">
                        <Table className="min-w-full text-sm">
                            <TableBody>
                                {Object.entries(standardConversionData?.conversion_rates).map(
                                    ([currencyCode, rate]) => (
                                        <TableRow key={currencyCode} className="hover:bg-gray-100">
                                            <TableCell className="px-4 py-2">{currencyCode}</TableCell>
                                            <TableCell className="px-4 py-2">{rate}</TableCell>
                                        </TableRow>
                                    )
                                )}
                            </TableBody>
                        </Table>
                        <ScrollBar orientation="vertical" />
                    </ScrollArea>
                </div>

                <div>
                    <CompareCurrencyComp />
                </div>
            </CardContent>
        </Card>
    )
}

export default DataTable

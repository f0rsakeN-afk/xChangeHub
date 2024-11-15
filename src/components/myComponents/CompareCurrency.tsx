import { useCallback, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { GitCompareArrows } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { fetchCurrencyCompareData } from "@/services/fetchCurrencyCompareData";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Define the form validation schema using Zod
const formSchema = z.object({
    baseCode: z.string().min(3, "Currency code must be at least 3 characters"),
    targetCode: z.string().min(3, "Currency code must be at least 3 characters"),
    amount: z.number().positive("Amount must be greater than 0"),
});

// TypeScript type for our form data
type FormData = z.infer<typeof formSchema>;

const CompareCurrencyComp = () => {
    const dispatch = useAppDispatch();

    // Redux state for data, loading, and errors
    const { isCompareDataLoading, compareCurrencyData, error } = useAppSelector(
        (state) => state.cmData
    );

    // Initialize React Hook Form with default values from localStorage
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            baseCode: localStorage.getItem('compareBaseCode') || 'USD',
            targetCode: localStorage.getItem('compareTargetCode') || '',
            amount: 0,
        },
    });

    // Watch the currency codes
    const baseCode = watch('baseCode');
    const targetCode = watch('targetCode');
    const currentAmount = watch('amount');

    // Update localStorage when currency codes change
    useEffect(() => {
        if (baseCode) {
            localStorage.setItem('compareBaseCode', baseCode.toUpperCase());
        }
    }, [baseCode]);

    useEffect(() => {
        if (targetCode) {
            localStorage.setItem('compareTargetCode', targetCode.toUpperCase());
        }
    }, [targetCode]);

    const onSubmit = (data: FormData) => {
        dispatch(
            fetchCurrencyCompareData({
                base_code: data.baseCode.toUpperCase(),
                target_code: data.targetCode.toUpperCase(),
                amount: data.amount,
            })
        );
    };

    return (
        <div className="max-w-4xl mx-auto mt-8">
            <Card className="shadow-lg rounded-lg border border-gray-200">
                <CardHeader className="bg-gray-100 p-4 rounded-t-lg">
                    <CardTitle className="text-xl font-semibold text-gray-800">
                        Compare Exchange Rate
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Input Fields */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <Label className="text-gray-700">Base Currency Code</Label>
                                <Input
                                    type="text"
                                    placeholder="e.g. USD"
                                    className="w-full p-2 mt-1 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
                                    {...register("baseCode", {
                                        onChange: (e) => {
                                            const value = e.target.value.toUpperCase();
                                            setValue('baseCode', value);
                                        }
                                    })}
                                />
                                {errors.baseCode && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.baseCode.message}
                                    </p>
                                )}
                            </div>
                            <div>
                                <Label className="text-gray-700">Target Currency Code</Label>
                                <Input
                                    type="text"
                                    placeholder="e.g. EUR"
                                    className="w-full p-2 mt-1 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
                                    {...register("targetCode", {
                                        onChange: (e) => {
                                            const value = e.target.value.toUpperCase();
                                            setValue('targetCode', value);
                                        }
                                    })}
                                />
                                {errors.targetCode && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.targetCode.message}
                                    </p>
                                )}
                            </div>
                            <div>
                                <Label className="text-gray-700">Amount</Label>
                                <Input
                                    type="number"
                                    placeholder="Enter amount"
                                    className="w-full p-2 mt-1 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
                                    {...register("amount", { valueAsNumber: true })}
                                />
                                {errors.amount && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.amount.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Compare Button */}
                        <div className="flex justify-center mt-6">
                            <Button
                                type="submit"
                                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md flex items-center justify-center space-x-2"
                                disabled={isCompareDataLoading}
                            >
                                <span>Compare</span>
                                <GitCompareArrows className="w-5 h-5" />
                            </Button>
                        </div>
                    </form>

                    {/* Loading State */}
                    {isCompareDataLoading && (
                        <div className="mt-6">
                            <Skeleton className="h-12 w-full rounded-md" />
                            <Skeleton className="h-12 w-full rounded-md mt-4" />
                        </div>
                    )}

                    {/* Error Display */}
                    {error && (
                        <div className="mt-6 text-center text-red-500">
                            <p>Error: {error}</p>
                        </div>
                    )}

                    {/* Results Display */}
                    {compareCurrencyData && !isCompareDataLoading && !error && (
                        <div className="mt-6 space-y-4">
                            <div className="text-center">
                                <p className="text-2xl font-bold text-gray-800">
                                    {currentAmount} {baseCode} = {" "}
                                    {compareCurrencyData.conversion_result?.toFixed(2)} {" "}
                                    {targetCode}
                                </p>
                            </div>

                            <div className="text-center mt-2">
                                <p className="text-lg text-gray-600">
                                    Rate: 1 {baseCode} = {" "}
                                    {compareCurrencyData.conversion_rate?.toFixed(2)} {" "}
                                    {targetCode}
                                </p>
                            </div>

                            <div className="space-y-2 bg-gray-50 p-4 rounded-lg mt-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Last Update</p>
                                        <p className="text-gray-700">
                                            {compareCurrencyData.time_last_update_utc
                                                ? new Date(compareCurrencyData.time_last_update_utc).toLocaleString()
                                                : "N/A"}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Next Update</p>
                                        <p className="text-gray-700">
                                            {compareCurrencyData.time_next_update_utc
                                                ? new Date(compareCurrencyData.time_next_update_utc).toLocaleString()
                                                : "N/A"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default CompareCurrencyComp;
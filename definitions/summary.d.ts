export type ISummaryRow = {
    date: string
    count: number
}
export type ISummary = {
    summaryText: string
    raw: ISummaryRow[]
}
export type timeSeriesItem = {
    date: string
    count: number
}

export type ISummaryAggregateItem = {
    name: string
    count: number
}

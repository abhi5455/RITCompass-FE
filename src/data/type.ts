export interface IReplyMsg {
    type: "message" | "timeline" | string,
    message?: string,
    timeline?: {
        title: string
        description: string
        responsible_authority: string
        expected_time: string
        related_links: string
    }[],
    remarks?: string
}

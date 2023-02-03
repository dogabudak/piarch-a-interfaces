export interface Messages {
    sender: string;
    recipient: string;
    messages: {
        message: string;
        timestamp: Date;
    }[];
}

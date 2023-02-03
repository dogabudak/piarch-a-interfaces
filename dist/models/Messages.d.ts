export interface Messages {
    chatId: string;
    messages: {
        sender: string;
        recipient: string;
        message: string;
        timestamp: Date;
    }[];
}

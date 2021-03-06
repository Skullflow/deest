import * as express from "express";

interface IRequestWithUser extends express.Request {
    user: any
}

export interface IServerProps {
    port: string;
    validate: boolean,
    useTypeDi: boolean,
}

export interface IInitServerProps {
    middlewares: any[],
    errorHandlers: any[]
    controllers: any[],
}

export interface ICallbackArgs {
    request: IRequestWithUser,
    response: express.Response,
    next: express.NextFunction
}
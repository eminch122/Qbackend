import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class TransformPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type === 'query') {
      return transformQueryParams(value);
    }
    if (metadata.type === 'param') {
      return transformUrlParams(value);
    }
    if (metadata.type === 'body') {
      return transformRequestBody(value);
    }
    return value;
  }
}

function transformQueryParams(params: any) {
  // implement logic to transform query params
  return params;
}

function transformUrlParams(params: any) {
  // implement logic to transform URL params
  return params;
}

function transformRequestBody(body: any) {
  // implement logic to transform request body
  return body;
}
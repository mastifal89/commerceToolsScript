import { createLogger, format, transports } from 'winston'
const { combine, timestamp, printf, prettyPrint } = format;

export default ({ level, isDisabled }) => {
  if (!isDisabled) {
    const myFormat = printf(info => {
      return `${info.timestamp} ${info.level}: ${info.message}`;
    });

    return createLogger({
      transports: [
        new transports.Console(),
      ],
      format: combine(
        timestamp(),
        myFormat,
      ),
    });
  }

  return undefined;
};

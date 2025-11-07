export default {
    default: {
        requireModule: ['ts-node/register'],
        require: ['src/steps/**/*.ts'],
        paths: ['features/**/*.feature'],
        format: ['json:./reports/cucumber_report.json'],
        publishQuiet: true
    }
};

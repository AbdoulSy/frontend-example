import get from "../get";
import apiCall from ".";

jest.mock("../get");

describe("Given apiCall", () => {
    describe("when called with a setter function as parameter", () => {
        const setSeconds = jest.fn();
        const OLD_ENV = process.env;

        beforeEach(() => {
            jest.resetModules() // this is important - it clears the cache
            process.env = { ...OLD_ENV };
        });

        afterEach(() => {
            process.env = OLD_ENV;
        });

        describe("and `process.env.API_URL` is not defined", () => {
            it("should call `get` with a local URL", async () => {
                await apiCall(setSeconds);

                expect(get).toHaveBeenCalledWith("http://localhost:3001/api");
            });
        });

        describe("and API_URL is resolved", () => {
            const expectedURL = "http://test.test";

            beforeEach(async () => {
                process.env.API_URL = expectedURL;
                
                await apiCall(setSeconds);
            });


            it("should NOT call setSeconds", () => {
                expect(setSeconds).not.toHaveBeenCalled();
            });

            describe("and the response is a successful JSON", () => {
                const expectedValue = 50;

                beforeEach(async () => {
                    const jsonResponse = {
                        success: true,
                        value: expectedValue
                    };

                    get.mockReturnValue(jsonResponse);
                    await apiCall(setSeconds);

                });

                it('should call setSeconds with the expected returned value', () => {
                    expect(setSeconds).toHaveBeenCalledWith(expectedValue);
                });
            });
        });   
    });
});
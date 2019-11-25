import intervalCall from ".";

jest.useFakeTimers();

describe("Given intervalCall", () => {
	describe("when called with the correct params", () => {
		const currentRequests = 0;
		const expectedRequests = currentRequests + 1;
		const setRequests = jest.fn();

		beforeEach(() => {
			intervalCall(currentRequests, setRequests);
		});


		it("should call setTimeout with the correct time", () => {
			expect(setTimeout).toHaveBeenNthCalledWith(1, expect.any(Function), 3000)
		});

		it('should execute setRequests with the expected requests after time elapses', () => {
			expect(setRequests).not.toHaveBeenCalled();

			jest.runAllTimers();
			
			expect(setRequests).toHaveBeenNthCalledWith(1, expectedRequests);
		});
	});
});
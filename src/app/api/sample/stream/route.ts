// https://developer.mozilla.org/docs/Web/API/ReadableStream#convert_async_iterator_to_stream

/**
 * Converts an iterator to a ReadableStream.
 * @param {any} iterator - The iterator to convert to a stream.
 * @returns {ReadableStream} A ReadableStream representing the iterator's values.
 */
function iteratorToStream(iterator: any): ReadableStream {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next();

      if (done) {
        controller.close();
      } else {
        controller.enqueue(value);
      }
    },
  });
}

/**
 * Delays execution for a specified amount of time.
 * @param {number} time - The time to sleep in milliseconds.
 * @returns {Promise<void>} A promise that resolves after the specified time.
 */
function sleep(time: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

const encoder = new TextEncoder();

/**
 * Generates an asynchronous iterator that yields HTML-encoded strings with a delay.
 * @yields {Uint8Array} An HTML-encoded string.
 */
async function* makeIterator() {
  yield encoder.encode("<p>One</p>");
  await sleep(200);
  yield encoder.encode("<p>Two</p>");
  await sleep(200);
  yield encoder.encode("<p>Three</p>");
}

/**
 * Handles GET requests by generating an iterator of HTML-encoded strings with delays and returns a response stream.
 * @returns {Promise<Response>} A promise resolving to a Response object containing the HTML-encoded strings as a stream.
 */
export async function GET(): Promise<Response> {
  const iterator = makeIterator();
  const stream = iteratorToStream(iterator);

  return new Response(stream);
}

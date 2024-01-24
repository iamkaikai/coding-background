import random
import time

# A list of interesting code snippets in various languages
code_snippets = [
    # Python: Fibonacci sequence
    '''def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b''',

    # JavaScript: Factorial
    '''function factorial(n) {
        return n ? n * factorial(n - 1) : 1;
    }''',

    # C++: Hello World
    '''#include <iostream>
    int main() {
        std::cout << "Hello, World!";
        return 0;
    }''',

    # More snippets can be added here...
]

def print_char_by_char(text, delay=0.05):
    for char in text:
        print(char, end='', flush=True)
        time.sleep(delay)
    print('\n')

while True:
    # Randomly select a snippet
    snippet = random.choice(code_snippets)

    # Print the snippet character by character
    print_char_by_char(snippet)

    # Wait for a while before printing the next snippet
    time.sleep(3)  # waits for 3 seconds after printing the whole snippet


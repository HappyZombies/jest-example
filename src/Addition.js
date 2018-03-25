class Addition {
    add(a, b) {
        return a + b;
    }
    factorial(num) {
        if (num < 0) {
            return -1;
        }
        else if (num === 0) {
            return 1;
        }
        return (num * this.factorial(num - 1));
    }
    palindrome(str) {
        return str == str.split('').reverse().join('');
    }
}

export default Addition;

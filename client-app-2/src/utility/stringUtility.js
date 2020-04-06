class StringUtility {
  static isNumeric(value) {
    return RegExp("^d+$").test(value);
  }

  static isNotEmpty(value) {
    return !(value.length === 0 && value === "");
  }
}

export default StringUtility;

#!/usr/bin/env ruby
gem 'minitest', '>= 5.0.0'
require 'minitest/autorun'
require 'minitest/pride'
require_relative 'roman_numerals'

# Test data version:
# 6985644 Merge pull request #121 from mikeyjcat/add-roman-numerals

class RomanNumeralsTest < Minitest::Test
  def test_1
    assert_equal 'I', 1.to_roman
  end

  def test_2
    assert_equal 'II', 2.to_roman
  end

  def test_3
    assert_equal 'III', 3.to_roman
  end

  def test_4
    assert_equal 'IV', 4.to_roman
  end

  def test_5
    assert_equal 'V', 5.to_roman
  end

  def test_6
    assert_equal 'VI', 6.to_roman
  end

  def test_7
    assert_equal 'VII', 7.to_roman
  end

  def test_8
    assert_equal 'VIII', 8.to_roman
  end

  def test_9
    assert_equal 'IX', 9.to_roman
  end

  def test_10
    skip
    assert_equal 'X', 10.to_roman
  end

  def test_27
    skip
    assert_equal 'XXVII', 27.to_roman
  end

  def test_48
    skip
    assert_equal 'XLVIII', 48.to_roman
  end

  def test_59
    skip
    assert_equal 'LIX', 59.to_roman
  end

  def test_93
    skip
    assert_equal 'XCIII', 93.to_roman
  end

  def test_141
    skip
    assert_equal 'CXLI', 141.to_roman
  end

  def test_163
    skip
    assert_equal 'CLXIII', 163.to_roman
  end

  def test_402
    skip
    assert_equal 'CDII', 402.to_roman
  end

  def test_575
    assert_equal 'DLXXV', 575.to_roman
  end

  def test_911
    skip
    assert_equal 'CMXI', 911.to_roman
  end

  def test_1024
    skip
    assert_equal 'MXXIV', 1024.to_roman
  end

  def test_3000
    skip
    assert_equal 'MMM', 3000.to_roman
  end

  # Don't forget to define a constant VERSION inside of Fixnum.
  def test_bookkeeping
    assert_equal 1, Fixnum::VERSION
  end
end
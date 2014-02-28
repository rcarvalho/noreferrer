# -*- encoding: utf-8 -*-
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)

Gem::Specification.new do |gem|
  gem.name          = "noreferrer"
  gem.version       = 0.2
  gem.authors       = ["Rodney Carvalho"]
  gem.email         = ["rcarvalho@atlantistech.com"]
  gem.description   = "Removes referrer information on an html link."
  gem.summary       = "Removes referrer information on an html link."
  gem.homepage      = "https://github.com/rjcarvalho/noreferrer"

  gem.files         = `git ls-files`.split($/)
  gem.require_paths = ["lib"]
end
